import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    callback: () => void
    color?: string
    disabled?: boolean
    children?: React.ReactNode
    size?: number
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {callback, color, children, disabled, ...otherProps} = props
    const finalClassName = `
    ${s.button} 
    ${color=== 'red' ? s.red : color==='secondary'? s.secondary : s.default} 
    ${disabled ? s.disabled : ''}`
    return (
        <button className={finalClassName}>{children}</button>
    )
}

// const finalClassName = s.button
//  + (disabled
//         ? '' + s.disabled
//         : color === 'red'
//             ? '' + s.red
//             :color === 'secondary'
//                 ? '' + s.secondary
//                 : '' + s.default)
//  +(className ? '' + className : '')

