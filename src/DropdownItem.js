
function DropdownItem ({title, func, _class}){
    const Click = () => {
        func(title);
    }
    return <div onClick={Click} className={_class?(_class+" item__dropdown"):"item__dropdown"}>{title}</div>;
}

export default DropdownItem;