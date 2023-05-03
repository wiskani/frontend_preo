import { getSectors } from 'src/api/Sectors';
  it("should fetch sectors successfully", async () => {
    const token = "fakeToken";
    const sectors = await getSectors(token);

    expect(sectors).toEqual([
      { id: 1, name: "Sector 1" },
      { id: 2, name: "Sector 2" },
    ]);
  });

