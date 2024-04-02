import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { fetchCityList, fetchDepartmentsList } from "../../service/service";
import { useState } from "react";

export default function FormCheckout({ setFormData }) {
  const [cityList, setCityList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);

  const {
    handleSubmit,
    // reset,
    getValues,
    setValue,
    formState: { errors, isValid },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      city: {},
      department: {},
    },
    mode: "onBlur",
  });

  const onSubmit = () => {
    if (isValid) {
      const formData = getValues();
      setFormData(formData);
      toast.success("Ми скоро з вами зв'яжемось!");
    }
    // reset();
  };

  const handleFetchCity = (search) => {
    fetchCityList(search)
      .then((result) => {
        setCityList(result);
      })
      .catch((error) => {
        console.error("Error fetching city list:", error);
      });
  };

  const handleFetchDepartments = (selectedCity) => {
    if (selectedCity && selectedCity.Ref) {
      fetchDepartmentsList(selectedCity.Ref)
        .then((result) => {
          setDepartmentList(result);
        })
        .catch((error) => {
          console.error("Error fetching department list:", error);
        });
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" my={1}>
        Ваші контактні дані
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            rules={{ required: "Поле є обов'язковим" }}
            render={({ field }) => (
              <TextField
                placeholder="Введіть імя"
                {...field}
                type="text"
                error={!!errors.name}
                helperText={errors.name?.message}
                size="small"
                label="Імя"
                fullWidth
              />
            )}
            name="name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            rules={{ required: "Поле є обов'язковим" }}
            render={({ field }) => (
              <TextField
                placeholder="Введіть прізвище"
                {...field}
                type="text"
                error={!!errors.surname}
                helperText={errors.surname?.message}
                size="small"
                label="Прізвище"
                fullWidth
              />
            )}
            name="surname"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            rules={{ required: "Поле є обов'язковим" }}
            render={({ field }) => (
              <TextField
                placeholder="Введіть номер телефону"
                {...field}
                type="number"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                size="small"
                label="Телефон"
                fullWidth
              />
            )}
            name="phone"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            rules={{
              required: "Поле є обов'язковим",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Введіть коректну електронну адресу",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                size="small"
                label="Електронна адреса"
                fullWidth
              />
            )}
            name="email"
          />
        </Grid>
      </Grid>
      <Typography variant="h6" my={1}>
        Доставка
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            rules={{ required: "Поле є обов'язковим" }}
            render={() => (
              <Autocomplete
                size="small"
                freeSolo
                id="city-autocomplete"
                options={cityList}
                getOptionLabel={(option) => option.Description}
                onChange={(event, value) => {
                  setValue("city", value);
                  console.log(value);
                  handleFetchDepartments(value);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Місто"
                    onChange={(e) => handleFetchCity(e.target.value)}
                    InputProps={{
                      ...params.InputProps,
                      type: "input",
                    }}
                  />
                )}
              />
            )}
            name="city" // Змінено ім'я поля на "city"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            rules={{ required: "Поле є обов'язковим" }}
            render={() => (
              <Autocomplete
                size="small"
                freeSolo
                id="department-autocomplete" // Змінив id на унікальний
                options={departmentList}
                getOptionLabel={(option) => option.Description}
                onChange={(event, value) => {
                  console.log(value);
                  setValue("department", value); // Записуємо вибране значення відділення у поле "department"
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Відділення"
                    InputProps={{
                      ...params.InputProps,
                      type: "input",
                    }}
                  />
                )}
              />
            )}
            name="department"
          />
        </Grid>
      </Grid>

      <Button type="submit" variant="outlined" sx={{ mt: "32px" }}>
        Продовжити
      </Button>
    </Box>
  );
}
