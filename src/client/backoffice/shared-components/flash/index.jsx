import "./flash.less";
import React from "react";
import PropTypes from "prop-types";
import { FlashItem } from "./flash-item";
import { removeFlash } from "../../actions/flash-actions";
import { connect } from "react-redux";

/**
 * Renders the flash message container
 * @param {Array} items The flash message list
 * @param {Function} onRemoveFlash The function to remove a flash from state
 */
const FlashComponent = ({ items, removeFlash }) => {
    return (
        <div className="flash">
            {items.map(item => (
                <FlashItem key={item.id} item={item} onRemoveFlash={removeFlash} />
            ))}
        </div>
    );
};

FlashComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            level: PropTypes.string,
            message: PropTypes.string
        })
    ),
    removeFlash: PropTypes.func
};

export const Flash = connect(
    state => {
        return { items: state.flash };
    },
    { removeFlash }
)(FlashComponent);
