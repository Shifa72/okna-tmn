import React, { useEffect, useRef } from 'react';

// Остальные импорты

export default function MosquitoNetModal({ modals }) {
    const modalRef = useRef(null); // Создаем ref для доступа к модальному окну

    useEffect(() => {
        // Устанавливаем обработчик события click на весь документ
        const handleOutsideClick = (e) => {
            // Если клик произошел вне модального окна, вызываем функцию закрытия
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal("mosquitonet"); // Вызов функции закрытия модального окна
            }
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal("remontokon"); // Вызов функции закрытия модального окна
            }
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal("otkosy"); // Вызов функции закрытия модального окна
            }
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal("replacesteklo"); // Вызов функции закрытия модального окна
            }
        };

        // Подписываемся на событие click
        document.addEventListener('click', handleOutsideClick);

        // Отписываемся от события при размонтаже компонента
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <Modal open={modals.mosquitonet} ref={modalRef}>
            {/* Остальной контент */}
        </Modal>
    );
}