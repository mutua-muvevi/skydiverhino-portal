import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// hooks
import useActiveLink from "../../../hooks/use-active-link";
//
import { StyledPopover } from "./styles";
import NavItem from "./nav-item";

// ----------------------------------------------------------------------

NavList.propTypes = {
	data: PropTypes.object,
	depth: PropTypes.number,
	hasChild: PropTypes.bool,
};

export default function NavList({ data, depth, hasChild }) {
	const navRef = useRef(null);

	const { pathname } = useLocation();

	const { active, isExternalLink } = useActiveLink(data.path);

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		const appBarEl = Array.from(
			document.querySelectorAll(".MuiAppBar-root")
		);

		// Reset styles when hover
		const styles = () => {
			document.body.style.overflow = "";
			document.body.style.padding = "";
			// Apply for Window
			appBarEl.forEach((elem) => {
				elem.style.padding = "";
			});
		};

		if (open) {
			styles();
		} else {
			styles();
		}
	}, [open]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<NavItem
				ref={navRef}
				item={data}
				depth={depth}
				open={open}
				active={active}
				isExternalLink={isExternalLink}
				onMouseEnter={handleOpen}
				onMouseLeave={handleClose}
			/>

			{hasChild && (
				<StyledPopover
					open={open}
					anchorEl={navRef.current}
					anchorOrigin={
						depth === 1
							? { vertical: "bottom", horizontal: "left" }
							: { vertical: "center", horizontal: "right" }
					}
					transformOrigin={
						depth === 1
							? { vertical: "top", horizontal: "left" }
							: { vertical: "center", horizontal: "left" }
					}
					PaperProps={{
						onMouseEnter: handleOpen,
						onMouseLeave: handleClose,
					}}
				>
					<NavSubList data={data.children} depth={depth} />
				</StyledPopover>
			)}
		</>
	);
}

// ----------------------------------------------------------------------

NavSubList.propTypes = {
	data: PropTypes.array,
	depth: PropTypes.number,
};

function NavSubList({ data, depth }) {
	return (
		<>
			{data.map((list) => (
				<NavList
					key={list.title + list.path}
					data={list}
					depth={depth + 1}
					hasChild={!!list.children}
				/>
			))}
		</>
	);
}
