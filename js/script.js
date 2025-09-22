document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    document.querySelector('header').appendChild(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Formulário de doação
    if (document.getElementById('donationForm')) {
        const amountButtons = document.querySelectorAll('.amount-btn');
        const customAmount = document.getElementById('customAmount');
        const paymentMethod = document.getElementById('payment');
        const creditCardFields = document.getElementById('creditCardFields');

        // Selecionar valor de doação
        amountButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                amountButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                if (this.classList.contains('other-amount')) {
                    customAmount.focus();
                } else {
                    customAmount.value = '';
                    customAmount.dataset.selected = 'false';
                }
            });
        });

        // Mostrar campos de cartão de crédito quando selecionado
        paymentMethod.addEventListener('change', function() {
            if (this.value === 'credit') {
                creditCardFields.style.display = 'block';
            } else {
                creditCardFields.style.display = 'none';
            }
        });

        // Validação do formulário de doação
        document.getElementById('donationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let amount = 0;
            const activeAmount = document.querySelector('.amount-btn.active');
            
            if (activeAmount && !activeAmount.classList.contains('other-amount')) {
                amount = activeAmount.dataset.amount;
            } else if (customAmount.value) {
                amount = customAmount.value;
            }
            
            if (amount <= 0) {
                alert('Por favor, selecione ou informe um valor para doação');
                return;
            }
            
            // Simular envio do formulário
            alert(`Obrigado por sua doação de R$ ${amount}!`);
            this.reset();
            amountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }

    // Formulário de login
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Validação simples
            if (!email || !password) {
                alert('Por favor, preencha todos os campos');
                return;
            }
            
            // Simular login
            alert('Login realizado com sucesso! Redirecionando...');
            window.location.href = 'index.html';
        });
    }

    // Formulário de cadastro
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            // Validar senha
            if (password.length < 8) {
                alert('A senha deve ter pelo menos 8 caracteres');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem');
                return;
            }
            
            if (!document.getElementById('regTerms').checked) {
                alert('Você deve aceitar os termos e condições');
                return;
            }
            
            // Simular cadastro
            alert('Cadastro realizado com sucesso! Faça login para continuar.');
            window.location.href = 'login.html';
        });
    }
});

// Máscaras para campos de formulário
function applyMasks() {
    // Máscara para CPF
    const cpfFields = document.querySelectorAll('input[type="text"][id*="cpf"], input[type="text"][id*="Cpf"]');
    cpfFields.forEach(field => {
        field.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length > 3) {
                value = value.substring(0, 3) + '.' + value.substring(3);
            }
            if (value.length > 7) {
                value = value.substring(0, 7) + '.' + value.substring(7);
            }
            if (value.length > 11) {
                value = value.substring(0, 11) + '-' + value.substring(11);
            }
            
            this.value = value.substring(0, 14);
        });
    });

    // Máscara para número do cartão
    const cardNumberFields = document.querySelectorAll('input[type="text"][id*="cardNumber"]');
    cardNumberFields.forEach(field => {
        field.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            value = value.substring(0, 16);
            
            let formatted = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formatted += ' ';
                }
                formatted += value[i];
            }
            
            this.value = formatted;
        });
    });

    // Máscara para validade do cartão
    const cardExpiryFields = document.querySelectorAll('input[type="text"][id*="cardExpiry"]');
    cardExpiryFields.forEach(field => {
        field.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            value = value.substring(0, 4);
            
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
            
            this.value = value.substring(0, 5);
        });
    });
}

// Aplicar máscaras quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', applyMasks);