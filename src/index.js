import './styles/main.css';
import { BankAccount } from './bankAccount.js';

function initialize() {
    const ikhtiyar = new BankAccount("Ikhtiyar", 500);
    console.log(ikhtiyar);
}

window.addEventListener('DOMContentLoaded', initialize)