import { white20 } from '../../../style/colors.js';
export const responsivePreviewPadding = {
    top: 8,
    bottom: 24,
    left: 24,
    right: 24,
};
export const responsivePreviewBorderWidth = 1;
export const stretchStyle = { display: 'flex', flex: 1 };
export function getStyles({ container, viewport, scaled, }) {
    const width = Math.max(16, viewport.width);
    const height = Math.max(16, viewport.height);
    const availableViewport = getAvailableViewport(container);
    const widthScale = Math.min(1, availableViewport.width / width);
    const heightScale = Math.min(1, availableViewport.height / height);
    const scaleFactor = scaled ? Math.min(widthScale, heightScale) : 1;
    const scaledWidth = width * scaleFactor;
    const scaledHeight = height * scaleFactor;
    return {
        maskContainerStyle: getMaskContainerStyle(scaled, widthScale, heightScale),
        padContainerStyle: getPadContainerStyle(),
        alignContainerStyle: getAlignContainerStyle(scaledWidth, scaledHeight),
        scaleContainerStyle: getScaleContainerStyle(width, height, scaleFactor),
    };
}
export function getViewportScaleFactor(viewport, container) {
    const containerViewport = getAvailableViewport(container);
    return Math.min(Math.min(1, containerViewport.width / viewport.width), Math.min(1, containerViewport.height / viewport.height));
}
function getAvailableViewport(container) {
    return {
        width: container.width - getHorPadding(),
        height: container.height - getVerPadding(),
    };
}
function getMaskContainerStyle(scale, widthScale, heightScale) {
    return {
        flex: 1,
        display: 'flex',
        justifyContent: scale || widthScale === 1 ? 'space-around' : 'flex-start',
        alignItems: scale || heightScale === 1 ? 'center' : 'flex-start',
        overflow: scale ? 'hidden' : 'scroll',
    };
}
function getPadContainerStyle() {
    return {
        position: 'relative',
        paddingTop: responsivePreviewPadding.top,
        paddingBottom: responsivePreviewPadding.bottom,
        paddingLeft: responsivePreviewPadding.left,
        paddingRight: responsivePreviewPadding.right,
    };
}
function getAlignContainerStyle(scaledWidth, scaledHeight) {
    return {
        width: scaledWidth,
        height: scaledHeight,
        border: `${responsivePreviewBorderWidth}px solid ${white20}`,
        overflow: 'hidden',
    };
}
function getScaleContainerStyle(width, height, scaleFactor) {
    return {
        width,
        height,
        transformOrigin: '0% 0%',
        transform: `scale(${scaleFactor})`,
    };
}
function getHorPadding() {
    return (responsivePreviewPadding.left +
        responsivePreviewPadding.right +
        2 * responsivePreviewBorderWidth);
}
function getVerPadding() {
    return (responsivePreviewPadding.top +
        responsivePreviewPadding.bottom +
        2 * responsivePreviewBorderWidth);
}
