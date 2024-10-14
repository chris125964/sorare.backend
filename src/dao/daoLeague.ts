export class DAOLeague {
  private id: number;
  private name: string;
  private country: string;

  static withIDC(idC: any): DAOLeague {
    let id = -1;
    let name = 'undefined';
    let country = 'undefined';
    if (idC) {
      id = idC['id'];
      name = idC['name'];
      country = idC['country'];
    }
    const league = new DAOLeague(id, name, country);
    return league;
  }

  private constructor(id: number, name: string, country: string) {
    this.id = id;
    this.name = name;
    this.country = country;
  }
  get Id() {
    return this.id;
  }
  set Id(id: number) {
    this.id = id;
  }

  get Name() {
    return this.name;
  }
  get Country() {
    return this.country;
  }
}
