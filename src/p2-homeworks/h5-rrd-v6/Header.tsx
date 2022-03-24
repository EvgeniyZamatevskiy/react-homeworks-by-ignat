import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Pages'
import { Modal } from './Modal'
import s from './Header.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Header() {

    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    return (
        <div>
            <SuperButton onClick={() => setVisibleModal(true)}>Меню</SuperButton>

            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <div className={s.content}>
                    <NavLink onClick={() => setVisibleModal(false)} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                    <NavLink onClick={() => setVisibleModal(false)} to={PATH.JUNIOR}>junior</NavLink>
                    <NavLink onClick={() => setVisibleModal(false)} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
                </div>
            </Modal>
        </div>
    )
}

export default Header