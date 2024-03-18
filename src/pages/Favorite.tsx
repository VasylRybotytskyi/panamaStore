import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useQuerySneakerQuery } from "../redux/services/sneakersApi";
import { useEffect } from "react";

const Favorite = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Створюємо стан для зберігання значення інпута
  const [page, setPage] = useState(0);

  // const page = 1;
  const { data, isLoading, isFetching, error } = useQuerySneakerQuery(
    searchTerm
    // page: page,
  ); // Використовуємо об'єкт параметрів у хуці

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Оновлюємо значення стану при зміні в інпуті
    setPage(1); // Скидаємо номер сторінки при зміні пошукового запиту
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data, page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Забороняємо перезавантаження сторінки при натисканні на кнопку
    // Тут можна додати додаткову логіку, яка буде виконуватися при натисканні на кнопку
  };

  return (
    <div>
      <Typography color="primary">Favorite</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleInputChange} // При зміні в інпуті викликаємо функцію handleInputChange
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>{/* Виводимо дані про кросівки */}</div>
          ))}
          <Button onClick={handlePrevPage}>Previous Page</Button>
          <Button onClick={handleNextPage} disabled={isFetching}>
            Next Page
          </Button>
        </div>
      )}
    </div>
  );
};

export default Favorite;
