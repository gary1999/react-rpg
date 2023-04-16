import React, { useState, useEffect } from 'react';

const DialogueBox = () => {
    const nextDialogue = () => {
        console.log('clicked');
    };

    return (
        <div className="dialogue-box">
            <button id="dialogue-button" onClick={() => nextDialogue()}>
                Next
            </button>
        </div>
    );
};

export default DialogueBox;
