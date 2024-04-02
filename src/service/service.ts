import axios from "axios";

const BASE_URL = "https://api.novaposhta.ua/v2.0/json/";

export const fetchCityList = async (city = "") => {
  try {
    if (city.length < 3) {
      // Якщо довжина рядка менше 3 символів, повертаємо порожній масив
      return [];
    }

    const { data, status } = await axios.post(BASE_URL, {
      apiKey: "0dcfb85db75a522e01245f48e288396c",
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: city,
      },
    });

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${status}`);
    }
    return data.data;
  } catch (error) {
    return error;
  }
};

export const fetchDepartmentsList = async (ref) => {
  try {
    const { data, status } = await axios.post(BASE_URL, {
      apiKey: "0dcfb85db75a522e01245f48e288396c",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: ref,
      },
    });

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${status}`);
    }
    return data.data;
  } catch (error) {
    return error;
  }
};

// Нова функція для отримання відділень по місту
// export const fetchDepartmentsByCity = async (cityName) => {
//   try {
//     const { data, status } = await axios.post(BASE_URL, {
//       apiKey: "0dcfb85db75a522e01245f48e288396c",
//       modelName: "AddressGeneral",
//       calledMethod: "getWarehouses",
//       methodProperties: {
//         CityName: cityName,
//       },
//     });

//     if (status !== 200) {
//       throw new Error(`Failed to fetch departments for ${cityName}: ${status}`);
//     }

//     // Отримуємо лише відділення, які є в місті
//     const departmentsInCity = data.data.filter(
//       (department) => department.CityDescription === cityName
//     );

//     return departmentsInCity;
//   } catch (error) {
//     throw new Error(
//       `Error fetching departments for ${cityName}: ${error.message}`
//     );
//   }
// };
