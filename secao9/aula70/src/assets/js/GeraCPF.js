import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand (min = 100000000, max = 900000000) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    geraNovoCPF () {
        const cpfSemDigito = this.rand()
        const digit1 = ValidaCPF.getTrueDigit(Array.from(cpfSemDigito))
        const digit2 = ValidaCPF.getTrueDigit(
            Array.from(`${cpfSemDigito}${digit1}`), false
        )

        return this.cpfFormatado(`${cpfSemDigito}${digit1}${digit2}`)
    }

    cpfFormatado (cpf_digits) {
        return (
            cpf_digits.slice(0, 3) + '.' +
            cpf_digits.slice(3, 6) + '.' +
            cpf_digits.slice(6, 9) + '-' +
            cpf_digits.slice(9, 11)
        )
    }
}
