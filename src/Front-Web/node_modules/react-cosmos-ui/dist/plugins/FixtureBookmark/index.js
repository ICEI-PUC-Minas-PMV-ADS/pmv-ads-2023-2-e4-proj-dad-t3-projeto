import { isEqual } from 'lodash-es';
import React from 'react';
import { createPlugin } from 'react-plugin';
import { BookmarkFixtureButton } from './BookmarkFixtureButton.js';
import { FixtureBookmarks } from './FixtureBookmarks.js';
const { namedPlug, register } = createPlugin({
    name: 'fixtureBookmark',
});
namedPlug('fixtureAction', 'bookmarkFixture', ({ pluginContext, slotProps }) => {
    const { fixtureItem } = slotProps;
    const { getBookmarks, setBookmarks } = getStorageApi(pluginContext);
    const bookmarks = getBookmarks();
    const selected = bookmarks.some(b => isEqual(b, fixtureItem));
    return (React.createElement(BookmarkFixtureButton, { selected: selected, onClick: () => setBookmarks(selected
            ? bookmarks.filter(b => !isEqual(b, fixtureItem))
            : [...bookmarks, fixtureItem]) }));
});
namedPlug('navRow', 'fixtureBookmarks', ({ pluginContext }) => {
    const router = pluginContext.getMethodsOf('router');
    const { getBookmarks, setBookmarks } = getStorageApi(pluginContext);
    const bookmarks = getBookmarks();
    return (React.createElement(FixtureBookmarks, { bookmarks: bookmarks, selectedFixtureId: router.getSelectedFixtureId(), onFixtureSelect: router.selectFixture, onBookmarkDelete: fixtureItem => setBookmarks(bookmarks.filter(b => !isEqual(b, fixtureItem))) }));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
function getStorageApi(pluginContext) {
    const storage = pluginContext.getMethodsOf('storage');
    function getBookmarks() {
        return storage.getItem('fixtureBookmarks.1') || [];
    }
    function setBookmarks(bookmarks) {
        storage.setItem('fixtureBookmarks.1', bookmarks);
    }
    return { getBookmarks, setBookmarks };
}
