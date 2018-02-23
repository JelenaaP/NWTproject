import { Korisnik } from "./korisnik.model";
import { Zgrada } from "./zgrada.model";

export class Stan implements StanInterface{
    public id: number;
	public ime: string;
	public adresa : string;
	public vlasnik : Korisnik;
	public zgrada : Zgrada;
	
    
    constructor(stanCfg: StanInterface)
	{	
		this.id = stanCfg.id;
		this.ime = stanCfg.ime;
		this.adresa = stanCfg.adresa;
		this.vlasnik = stanCfg.vlasnik;
		this.zgrada = stanCfg.zgrada;

	}
}

interface StanInterface {
	id?: number;
	ime: string;
	adresa : string;
	vlasnik: Korisnik;
	zgrada: Zgrada;
}