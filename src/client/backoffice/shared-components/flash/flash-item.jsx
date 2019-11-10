import React from "react";
import PropTypes from "prop-types";

export const FlashItem = ({ item: { id, level, message }, onRemoveFlash }) => {
    const removeFlash = () => {
        onRemoveFlash(id);
    };

    return (
        <div key={id} className={`alert alert-${level}`}>
            {message}
            <button className="close" onClick={removeFlash}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

FlashItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        level: PropTypes.string,
        message: PropTypes.string
    }),
    onRemoveFlash: PropTypes.func
};
