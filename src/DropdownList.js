import DropdownItem from "./DropdownItem.js";


function DropdownList ({data, current, func, _class}){
    return (
        <div className={_class?(_class+" list__dropdown-body"):"list__dropdown-body"}>
        {
            data.map(op => <DropdownItem key={op} title={op} func={func} _class={op===current?"current_option":null}/>)
        }
        </div>
    )
}

export default DropdownList;