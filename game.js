class ClickMiner {
    constructor() {
        this.gold = 0;
        this.goldPerClick = 1;
        this.goldPerSecond = 0;
        this.init();
    }

    init() {
        // Asignar los eventos de clic a los botones
        document.getElementById("clickButton").addEventListener("click", () => this.mineGold());
        setInterval(() => this.passiveMining(), 1000); // Minado pasivo cada segundo
        this.updateUI();
    }

    mineGold() {
        this.gold += this.goldPerClick;
        this.updateUI();
    }

    passiveMining() {
        this.gold += this.goldPerSecond;
        this.updateUI();
    }

    buyUpgrade(type) {
        if (type === "pickaxe" && this.gold >= 10) {
            this.gold -= 10;
            this.goldPerClick += 1;
        } else if (type === "worker" && this.gold >= 50) {
            this.gold -= 50;
            this.goldPerSecond += 1;
        }
        this.updateUI();
    }

    updateUI() {
        document.getElementById("goldCount").innerText = Oro: ${this.gold};
        document.getElementById("clickPower").innerText = Oro por clic: ${this.goldPerClick};
        document.getElementById("passiveIncome").innerText = Oro por segundo: ${this.goldPerSecond};
    }
}

// Crear el objeto de juego cuando se carga la página
window.game = new ClickMiner();