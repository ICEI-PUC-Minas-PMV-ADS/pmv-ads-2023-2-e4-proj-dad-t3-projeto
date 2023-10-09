const NAV_WIDTH_STORAGE_KEY = 'navWidth';
const NAV_WIDTH_DEFAULT = 320;
const NAV_WIDTH_MIN = 224;
const NAV_WIDTH_MAX = 512;
export function getNavWidthApi({ getMethodsOf }) {
    const storage = getMethodsOf('storage');
    return {
        navWidth: storage.getItem(NAV_WIDTH_STORAGE_KEY) || NAV_WIDTH_DEFAULT,
        setNavWidth: (newWidth) => storage.setItem(NAV_WIDTH_STORAGE_KEY, restrictNavWidth(newWidth)),
    };
}
function restrictNavWidth(navWidth) {
    return Math.min(NAV_WIDTH_MAX, Math.max(NAV_WIDTH_MIN, navWidth));
}
