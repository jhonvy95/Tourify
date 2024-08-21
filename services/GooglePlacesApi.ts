export const GetPhotoRef = async (placeName: string) => {
  try {
    // Construir la URL de forma segura y limpiar el nombre del lugar
    // const encodedPlaceName = encodeURIComponent(placeName.trim());
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

    if (!apiKey) {
      throw new Error("Google Maps API key is not defined");
    }

    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeName}&key=${apiKey}`;

    // Realizar la solicitud de red
    const resp = await fetch(url);

    // Verificar si la respuesta es exitosa
    if (!resp.ok) {
      throw new Error(`Network response was not ok: ${resp.statusText}`);
    }

    // Convertir la respuesta a JSON
    const result = await resp.json();

    return result?.results[0]?.photos[0]?.photo_reference;
  } catch (error: any) {
    // Manejo de errores
    console.error("Error fetching photo reference:", error.message);
    return null;
  }
};
