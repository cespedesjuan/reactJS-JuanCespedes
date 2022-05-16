const FormatNumber = ({ number }) => {
    return <span>{new Intl.NumberFormat('es', { style: 'currency', currency: 'ARS' }).format(number)}</span>
}

export default FormatNumber;