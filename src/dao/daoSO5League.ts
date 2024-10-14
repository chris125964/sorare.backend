export class DAOSo5League {
  private id: number;
  private name: string;

  static withIDC(idC: any): DAOSo5League {
    let id = -1;
    let name = 'undefined';
    if (idC) {
      id = idC['id'];
      name = idC['name'];
    }
    const so5League = new DAOSo5League(id, name);
    return so5League;
  }

  private constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
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
}
