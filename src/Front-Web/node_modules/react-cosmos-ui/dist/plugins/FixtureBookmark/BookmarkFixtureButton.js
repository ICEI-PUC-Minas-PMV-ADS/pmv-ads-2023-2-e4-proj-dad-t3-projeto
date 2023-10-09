import React from 'react';
import { IconButton32 } from '../../components/buttons/index.js';
import { StarIcon } from '../../components/icons/index.js';
export function BookmarkFixtureButton({ selected, onClick }) {
    return (React.createElement(IconButton32, { icon: React.createElement(StarIcon, null), selected: selected, title: "Bookmark fixture", onClick: onClick }));
}
