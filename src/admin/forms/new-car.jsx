import { useContext, useState } from "react";
import { showFormContext } from "../../context/showForm";
import styles from "./new-car.module.css";
import axios from "axios";
import carBrands from "../../data/car-brands";

export const NewCar = () => {
  const { toogleForm } = useContext(showFormContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [year, setYear] = useState();
  const [brand, setBrand] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [km, setKm] = useState();
  const [doors, setDoors] = useState();
  const [color, setColor] = useState("");
  const [notes, setNotes] = useState("");
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState("");

  const cloudinary_url = import.meta.env.VITE_CLOUDINARY_API;
  const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleImageInput = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (!file) return;
  };

  const postForm = async (e) => {
    e.preventDefault();
    let uploadedImageUrl = "";

    if (imageFile) {
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", upload_preset);

      try {
        const res = await axios.post(cloudinary_url, data);
        uploadedImageUrl = res.data.secure_url;
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
        return;
      }
    }

    const newCar = {
      name,
      price,
      year: year ? parseInt(year) : null,
      brand,
      transmission,
      fuel,
      km: km ? parseInt(km) : null,
      doors: doors ? parseInt(doors) : null,
      color,
      notes,
      featured,
      status,
      image: uploadedImageUrl,
    };

    try {
      await axios.post("http://localhost:3000/new-car", newCar, {
        headers: { "Content-Type": "application/json" },
      });
      toogleForm();
    } catch (error) {
      console.error("Erro ao cadastrar carro:", error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={toogleForm}>
          &times;
        </button>
        <h2>Novo Carro</h2>
        <form className={styles.form} onSubmit={postForm}>
          <label>
            Imagem:
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleImageInput}
            />
          </label>

          <label>
            Nome:
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              name="price"
              step="0.01"
              min="0"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label>
            Ano:
            <input
              type="number"
              name="year"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>

          <label>
            Marca:
            <select
              name="brand"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Selecione uma marca</option>
              {carBrands.map((brandObj) => (
                <option value={brandObj.alt} key={brandObj.id}>
                  {brandObj.alt.charAt(0).toUpperCase() + brandObj.alt.slice(1)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Câmbio:
            <select
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="Manual">Manual</option>
              <option value="Automático">Automático</option>
              <option value="Automatizado">Automatizado</option>
              <option value="CVT">CVT</option>
              <option value="Sequencial">Sequencial</option>
            </select>
          </label>

          <label>
            Combustível:
            <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Flex">Flex</option>
              <option value="Álcool">Álcool</option>
              <option value="Gasolina">Gasolina</option>
              <option value="Elétrico">Elétrico</option>
              <option value="Híbrido ">Híbrido</option>
            </select>
          </label>

          <label>
            KM:
            <input
              type="number"
              name="km"
              min="0"
              value={km}
              onChange={(e) => setKm(e.target.value)}
            />
          </label>

          <label>
            Portas:
            <select value={doors} onChange={(e) => setDoors(e.target.value)}>
              <option value="">Selecione</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <label>
            Cor:
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>

          <label>
            Observações:
            <textarea
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          <div className={styles.options}>
            <label>
              Destaque:
              <input
                type="checkbox"
                name="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
            </label>
            <label>
              Status:
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </label>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
