export default async function fetchData(setdata) {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setdata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }