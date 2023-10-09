/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-plugin":
/*!******************************!*\
  !*** external "ReactPlugin" ***!
  \******************************/
/***/ ((module) => {

module.exports = ReactPlugin;

/***/ }),

/***/ "styled-components":
/*!***********************************!*\
  !*** external "StyledComponents" ***!
  \***********************************/
/***/ ((module) => {

module.exports = StyledComponents;

/***/ }),

/***/ "./packages/react-cosmos-plugin-open-fixture/dist/OpenFixtureButton.js":
/*!*****************************************************************************!*\
  !*** ./packages/react-cosmos-plugin-open-fixture/dist/OpenFixtureButton.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenFixtureButton": () => (/* binding */ OpenFixtureButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_cosmos_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cosmos-ui */ "./packages/react-cosmos-ui/dist/components/buttons/IconButton32.js");
/* harmony import */ var react_cosmos_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cosmos-ui */ "./packages/react-cosmos-ui/dist/components/icons/index.js");


function OpenFixtureButton({ onClick }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_cosmos_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton32, { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_cosmos_ui__WEBPACK_IMPORTED_MODULE_2__.EditIcon, null), title: "Open fixture source", onClick: onClick }));
}


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/components/BaseSvg.js":
/*!*************************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/components/BaseSvg.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSvg": () => (/* binding */ BaseSvg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");


function BaseSvg({ children, ...attrs }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSvg, { xmlns: "http://www.w3.org/2000/svg", ...attrs }, children));
}
const StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_1__.svg `
  display: block;
`;


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/components/Icon.js":
/*!**********************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/components/Icon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _BaseSvg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSvg.js */ "./packages/react-cosmos-ui/dist/components/BaseSvg.js");


function Icon({ children, size = '100%', strokeWidth = 1.5 }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseSvg_js__WEBPACK_IMPORTED_MODULE_1__.BaseSvg, { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" }, children));
}


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/components/buttons/IconButton32.js":
/*!**************************************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/components/buttons/IconButton32.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButton32": () => (/* binding */ IconButton32)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _style_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/colors.js */ "./packages/react-cosmos-ui/dist/style/colors.js");
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.js */ "./packages/react-cosmos-ui/dist/components/buttons/shared.js");



function IconButton32({ icon, title, disabled = false, selected = false, onClick, }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_js__WEBPACK_IMPORTED_MODULE_1__.StyledButton, { bg: _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey32, bgSelect: _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey8, bgHover: _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey24, color: _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey224, colorSelect: _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey248, title: title, selected: selected, disabled: disabled, onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_js__WEBPACK_IMPORTED_MODULE_1__.StyledIcon, { color: selected ? _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey176 : _style_colors_js__WEBPACK_IMPORTED_MODULE_2__.grey160 }, icon)));
}


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/components/buttons/shared.js":
/*!********************************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/components/buttons/shared.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "StyledButton": () => (/* binding */ StyledButton),
/* harmony export */   "StyledIcon": () => (/* binding */ StyledIcon)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var _style_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/colors.js */ "./packages/react-cosmos-ui/dist/style/colors.js");
/* harmony import */ var _style_vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/vars.js */ "./packages/react-cosmos-ui/dist/style/vars.js");



const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.button `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: 32px;
  border: 0;
  border-radius: 3px;
  background: ${props => (props.selected ? props.bgSelect : props.bg)};
  color: ${props => (props.selected ? props.colorSelect : props.color)};
  white-space: nowrap;
  user-select: none;
  outline: none;
  transition: background ${_style_vars_js__WEBPACK_IMPORTED_MODULE_1__.quick}s, color ${_style_vars_js__WEBPACK_IMPORTED_MODULE_1__.quick}s, opacity ${_style_vars_js__WEBPACK_IMPORTED_MODULE_1__.quick}s;

  :hover {
    background: ${props => (props.selected ? props.bgSelect : props.bgHover)};
  }

  :focus {
    box-shadow: 0 0 0.5px 1px ${_style_colors_js__WEBPACK_IMPORTED_MODULE_2__.blue};
  }

  :disabled {
    background: ${props => (props.selected ? props.bgSelect : props.bg)};
    cursor: default;
    opacity: 0.5;
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;
const iconSize = 16;
const StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__.span `
  width: ${iconSize}px;
  height: ${iconSize}px;
  padding: 2px 0 0 0;
  color: ${props => props.color};
  transition: color ${_style_vars_js__WEBPACK_IMPORTED_MODULE_1__.quick}s;
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0__.span `
  padding-left: 6px;
  line-height: 14px;

  :first-child {
    padding-left: 0;
  }
`;


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/components/icons/index.js":
/*!*****************************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/components/icons/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCircleIcon": () => (/* binding */ AlertCircleIcon),
/* harmony export */   "CastIcon": () => (/* binding */ CastIcon),
/* harmony export */   "CheckCircleIcon": () => (/* binding */ CheckCircleIcon),
/* harmony export */   "ChevronDownIcon": () => (/* binding */ ChevronDownIcon),
/* harmony export */   "ChevronLeftIcon": () => (/* binding */ ChevronLeftIcon),
/* harmony export */   "ChevronRightIcon": () => (/* binding */ ChevronRightIcon),
/* harmony export */   "CopyIcon": () => (/* binding */ CopyIcon),
/* harmony export */   "EditIcon": () => (/* binding */ EditIcon),
/* harmony export */   "ExternalIcon": () => (/* binding */ ExternalIcon),
/* harmony export */   "FileIcon": () => (/* binding */ FileIcon),
/* harmony export */   "FolderIcon": () => (/* binding */ FolderIcon),
/* harmony export */   "HelpCircleIcon": () => (/* binding */ HelpCircleIcon),
/* harmony export */   "HomeIcon": () => (/* binding */ HomeIcon),
/* harmony export */   "InfoIcon": () => (/* binding */ InfoIcon),
/* harmony export */   "LoaderIcon": () => (/* binding */ LoaderIcon),
/* harmony export */   "MaximizeIcon": () => (/* binding */ MaximizeIcon),
/* harmony export */   "MenuIcon": () => (/* binding */ MenuIcon),
/* harmony export */   "Minimize2Icon": () => (/* binding */ Minimize2Icon),
/* harmony export */   "MinusSquareIcon": () => (/* binding */ MinusSquareIcon),
/* harmony export */   "PlusSquareIcon": () => (/* binding */ PlusSquareIcon),
/* harmony export */   "RefreshCcwIcon": () => (/* binding */ RefreshCcwIcon),
/* harmony export */   "RefreshCwIcon": () => (/* binding */ RefreshCwIcon),
/* harmony export */   "RotateCcwIcon": () => (/* binding */ RotateCcwIcon),
/* harmony export */   "SearchIcon": () => (/* binding */ SearchIcon),
/* harmony export */   "SlidersIcon": () => (/* binding */ SlidersIcon),
/* harmony export */   "SmartphoneIcon": () => (/* binding */ SmartphoneIcon),
/* harmony export */   "StarIcon": () => (/* binding */ StarIcon),
/* harmony export */   "XCircleIcon": () => (/* binding */ XCircleIcon),
/* harmony export */   "XIcon": () => (/* binding */ XIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon.js */ "./packages/react-cosmos-ui/dist/components/Icon.js");


const ChevronLeftIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "15 18 9 12 15 6" })));
const ChevronRightIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "9 18 15 12 9 6" })));
const ChevronDownIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "6 9 12 15 18 9" })));
const FolderIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" })));
const XIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })));
const XCircleIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "9", y1: "9", x2: "15", y2: "15" })));
const MaximizeIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" })));
const SmartphoneIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "18", x2: "12", y2: "18" })));
const Minimize2Icon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "4 14 10 14 10 20" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "20 10 14 10 14 4" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "3", y1: "21", x2: "10", y2: "14" })));
const RefreshCwIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "23 4 23 10 17 10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "1 20 1 14 7 14" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })));
const RefreshCcwIcon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, { ...props },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "1 4 1 10 7 10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "23 20 23 14 17 14" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })));
const HomeIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })));
const CastIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "2", y1: "20", x2: "2", y2: "20" })));
const EditIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", { points: "18 2 22 6 12 16 8 16 8 12 18 2" })));
const CheckCircleIcon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, { ...props },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })));
const AlertCircleIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "16" })));
const InfoIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "8" })));
const LoaderIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "2", x2: "12", y2: "6" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "18", x2: "12", y2: "22" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "2", y1: "12", x2: "6", y2: "12" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "18", y1: "12", x2: "22", y2: "12" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })));
const SlidersIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "4", y1: "21", x2: "4", y2: "14" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "4", y1: "10", x2: "4", y2: "3" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "12" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "3" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "20", y1: "21", x2: "20", y2: "16" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "20", y1: "12", x2: "20", y2: "3" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "1", y1: "14", x2: "7", y2: "14" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "9", y1: "8", x2: "15", y2: "8" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "17", y1: "16", x2: "23", y2: "16" })));
const CopyIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })));
const RotateCcwIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "1 4 1 10 7 10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })));
const FileIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "13 2 13 9 20 9" })));
const SearchIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "11", cy: "11", r: "8" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })));
const MenuIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" })));
const ExternalIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", { points: "15 3 21 3 21 9" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" })));
const HelpCircleIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "17", x2: "12", y2: "17" })));
const MinusSquareIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "8", y1: "12", x2: "16", y2: "12" })));
const PlusSquareIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "16" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { x1: "8", y1: "12", x2: "16", y2: "12" })));
const StarIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })));


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/style/colors.js":
/*!*******************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/style/colors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "black60": () => (/* binding */ black60),
/* harmony export */   "blue": () => (/* binding */ blue),
/* harmony export */   "createGreyColor": () => (/* binding */ createGreyColor),
/* harmony export */   "disabledColors": () => (/* binding */ disabledColors),
/* harmony export */   "grey128": () => (/* binding */ grey128),
/* harmony export */   "grey144": () => (/* binding */ grey144),
/* harmony export */   "grey160": () => (/* binding */ grey160),
/* harmony export */   "grey176": () => (/* binding */ grey176),
/* harmony export */   "grey192": () => (/* binding */ grey192),
/* harmony export */   "grey208": () => (/* binding */ grey208),
/* harmony export */   "grey216": () => (/* binding */ grey216),
/* harmony export */   "grey224": () => (/* binding */ grey224),
/* harmony export */   "grey24": () => (/* binding */ grey24),
/* harmony export */   "grey248": () => (/* binding */ grey248),
/* harmony export */   "grey32": () => (/* binding */ grey32),
/* harmony export */   "grey64": () => (/* binding */ grey64),
/* harmony export */   "grey8": () => (/* binding */ grey8),
/* harmony export */   "grey96": () => (/* binding */ grey96),
/* harmony export */   "lightBlue": () => (/* binding */ lightBlue),
/* harmony export */   "screenGrey1": () => (/* binding */ screenGrey1),
/* harmony export */   "screenGrey2": () => (/* binding */ screenGrey2),
/* harmony export */   "screenGrey3": () => (/* binding */ screenGrey3),
/* harmony export */   "screenGrey4": () => (/* binding */ screenGrey4),
/* harmony export */   "screenGrey5": () => (/* binding */ screenGrey5),
/* harmony export */   "screenGrey6": () => (/* binding */ screenGrey6),
/* harmony export */   "screenPrimary1": () => (/* binding */ screenPrimary1),
/* harmony export */   "screenPrimary2": () => (/* binding */ screenPrimary2),
/* harmony export */   "screenPrimary3": () => (/* binding */ screenPrimary3),
/* harmony export */   "selectedColors": () => (/* binding */ selectedColors),
/* harmony export */   "white10": () => (/* binding */ white10),
/* harmony export */   "white20": () => (/* binding */ white20),
/* harmony export */   "white3": () => (/* binding */ white3),
/* harmony export */   "white95": () => (/* binding */ white95)
/* harmony export */ });
// Chrome colors (neutral)
const grey8 = createGreyColor(8);
const grey24 = createGreyColor(24);
const grey32 = createGreyColor(32);
const grey64 = createGreyColor(64);
const grey96 = createGreyColor(96);
const grey128 = createGreyColor(128);
const grey160 = createGreyColor(160);
const grey144 = createGreyColor(144);
const grey176 = createGreyColor(176);
const grey192 = createGreyColor(192);
const grey208 = createGreyColor(208);
const grey216 = createGreyColor(216);
const grey224 = createGreyColor(224);
const grey248 = createGreyColor(248);
const black60 = createGreyColor(0, 0.6);
const white3 = createGreyColor(255, 0.03);
const white10 = createGreyColor(255, 0.1);
const white20 = createGreyColor(255, 0.2);
const white95 = createGreyColor(255, 0.95);
const blue = '#3182ce';
const lightBlue = '#63b3ed';
// Screen colors
const screenGrey1 = 'hsl(230, 17%, 22%)';
const screenGrey2 = 'hsl(230, 19%, 33%)';
const screenGrey3 = 'hsl(230, 22%, 49%)';
const screenGrey4 = 'hsl(230, 25%, 74%)';
const screenGrey5 = 'hsl(230, 28%, 85%)';
const screenGrey6 = 'hsl(230, 32%, 93%)';
const screenPrimary1 = 'hsl(230, 48%, 32%)';
const screenPrimary2 = 'hsl(230, 51%, 43%)';
const screenPrimary3 = 'hsl(230, 65%, 61%)';
function selectedColors(defaultColor, selectedColor) {
    return (props) => props.selected ? selectedColor : defaultColor;
}
function disabledColors(defaultColor, disabledColor) {
    return (props) => props.disabled ? disabledColor : defaultColor;
}
function createGreyColor(intensity, alpha = 1) {
    return alpha !== 1
        ? `rgba(${intensity}, ${intensity}, ${intensity}, ${alpha})`
        : `rgb(${intensity}, ${intensity}, ${intensity})`;
}


/***/ }),

/***/ "./packages/react-cosmos-ui/dist/style/vars.js":
/*!*****************************************************!*\
  !*** ./packages/react-cosmos-ui/dist/style/vars.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "quick": () => (/* binding */ quick)
/* harmony export */ });
const fontFamily = `-apple-system, BlinkMacSystemFont, Ubuntu, 'Helvetica Neue', Helvetica, sans-serif`;
const quick = 0.32;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************************!*\
  !*** ./packages/react-cosmos-plugin-open-fixture/dist/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plugin */ "react-plugin");
/* harmony import */ var _OpenFixtureButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenFixtureButton.js */ "./packages/react-cosmos-plugin-open-fixture/dist/OpenFixtureButton.js");



const { namedPlug, register } = (0,react_plugin__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    name: 'openFixture',
});
namedPlug('rendererAction', 'editFixture', ({ pluginContext, slotProps }) => {
    const { getMethodsOf } = pluginContext;
    const core = getMethodsOf('core');
    const devServerOn = core.isDevServerOn();
    const onOpen = useOpen(pluginContext, slotProps.fixtureId, devServerOn);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        return core.registerCommands({ editFixture: onOpen });
    }, [core, onOpen]);
    if (!devServerOn) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenFixtureButton_js__WEBPACK_IMPORTED_MODULE_2__.OpenFixtureButton, { onClick: onOpen });
});

if (true)
    register();
function useOpen(context, fixtureId, devServerOn) {
    const onError = useErrorNotification(context);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (!devServerOn)
            return onError('Static exports cannot access source files.');
        openFile(fixtureId.path)
            .then(httpStatus => {
            switch (httpStatus) {
                case 200:
                    // No need to notify when everything is OK
                    return;
                case 400:
                    return onError('This looks like a bug. Please let us know!');
                case 404:
                    return onError('File is missing. Weird!');
                default:
                    return onError('Does your OS know to open source files with your code editor?');
            }
        })
            .catch(err => onError('Is the Cosmos server running?'));
    }, [fixtureId.path, onError, devServerOn]);
}
function useErrorNotification(context) {
    const { getMethodsOf } = context;
    const notifications = getMethodsOf('notifications');
    const { pushTimedNotification } = notifications;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((info) => pushTimedNotification({
        id: 'edit-fixture',
        type: 'error',
        title: 'Failed to open fixture',
        info,
    }), [pushTimedNotification]);
}
async function openFile(filePath) {
    const url = `/_open?filePath=${filePath}`;
    const { status } = await fetch(url, { credentials: 'same-origin' });
    return status;
}

})();

/******/ })()
;