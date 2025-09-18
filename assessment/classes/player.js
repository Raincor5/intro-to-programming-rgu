class Player {
	constructor(name, score, ascii_logo, colour) {
		this._name = name;
		this._score = score;
		this._ascii_logo = ascii_logo;
		this._colour = colour;
	}
	// Setters
	set name(name) {
		this._name = name;
	}
	set colour(colour) {
        this._colour = colour;
	}
    set score(score) {
        this._score = score;
    }
	// Getters 
	get name() {
		return this._name;
	}
	get colour() {
		return this._colour;
	}

    get ascii_logo() {
        return this._ascii_logo;
    }
	
};

module.export = Player;