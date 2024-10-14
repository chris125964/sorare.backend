export class DAOClub {
  private id: number;
  private name: string;
  private so5league_id: number;
  private league_id: number;

  static Default(
    id: number,
    name: string,
    so5league_id: number,
    league_id: number,
  ): DAOClub {
    const club = new DAOClub(id, name, so5league_id, league_id);
    return club;
  }

  private constructor(
    id: number,
    name: string,
    so5league_id: number,
    league_id: number,
  ) {
    this.id = id;
    this.name = name;
    this.so5league_id = so5league_id;
    this.league_id = league_id;
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

  get So5LeagueId() {
    return this.so5league_id;
  }
  get LeagueId() {
    return this.league_id;
  }
}
