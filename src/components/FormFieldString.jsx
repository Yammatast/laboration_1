function FormFieldString({
    id,
    children,
    type,
    disabled,
    updateValue,
    value,
    inputRef,
}) {
    const handleChange = (e) => {
        updateValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                value={value}
                ref={inputRef}
                type={type}
                disabled={disabled}
                onChange={handleChange}
            />
        </>
    );
}

export default FormFieldString;
