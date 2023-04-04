function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButton()
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clear() {
            this.display.value = ' '
        },

        finish() {
            let count = this.display.value;

            try {
                count = eval(count)

                if (!count) {
                    alert('Conta inválida')
                    return;
                }
                this.display.value = count
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clear()
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne()
                }
                if (el.classList.contains('btn-eq')) {
                    this.finish()
                }
            })
        },

        btnToDisplay(valor) {
            this.display.value += valor
        }

    };
}
const calculator = createCalculator();
calculator.start();