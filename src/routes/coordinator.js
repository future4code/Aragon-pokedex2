export const navigateToPokeListPage = (navigate) => {
    navigate("/")
}

export const navigateToPokeDetailsPage = (navigate, pokeName) => {
    navigate(`/pokemon/${pokeName}/details`)
}

export const navigateToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const navigateToPreviousPage = (navigate) => {
    navigate(-1)
}