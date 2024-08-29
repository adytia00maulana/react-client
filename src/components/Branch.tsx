function Branch({ trunk }: { trunk: boolean }){
    return(
        <div className={`
            ${!trunk? 'border-l-4': '' /*Conditional for border*/}
            ${trunk? 'w-24': 'w-16' /*Conditional for width*/}
            ${trunk? '-translate-x-24': '-translate-x-16' /*Conditional for rotate*/}
            scale-y-110
            transition
            ease-out
            duration-300
            group-hover:border-teal-400
            h-full border-blue-500 border-b-4 absolute -translate-y-10
            `}
        />
    )
}
export default Branch;