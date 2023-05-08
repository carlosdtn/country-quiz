export default function useGroupCountries() {
  const { randomCountries, codes } = get4RandomCountry()
  const lblCountry = createObjectFromCountry(randomCountries)

  useEffect(() => {
    if (codes) {
      fetch(`${baseURL}/region/europe`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false)
          setCountry(data)
        })
    }
  }, [])

  return country
}
