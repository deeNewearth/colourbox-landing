import React from 'react'
import styles from "./infoModal.module.css";
import CloseIcon from "../../assets/close.svg"
const InfoModal = ({ title, content, onClose }: { title: string, content: JSX.Element, onClose: () => any }) => {
    return (
        <div className={styles.modalWindow}>
            <div>
                <span className={styles.modalClose} onClick={() => onClose()}>
                    <CloseIcon />
                </span>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <div style={{ marginTop: "1em" }}>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal