import { ChangeEvent, useState } from 'react'

export const UserForm = () => {
  const [files, setFiles] = useState<File[]>([])

  function handleInputFileOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return
    setFiles(Array.from(event.target.files))
  }

  return (
    <>
      <h1>Cadastro do usuário</h1>

      <form data-testid="user-form">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome completo"
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor="civil-state">Estado civil</label>
          <select id="civil-state">
            <option value="">Selecione seu estado civil</option>
            <option value="single">Solteiro</option>
            <option value="divorced">Divorciado</option>
            <option value="married">Casado</option>
            <option value="separate">Separado</option>
            <option value="widower">viúvo</option>
          </select>
        </div>
        <div>
          <label htmlFor="file-upload">Suas imagens</label>
          <input
            type="file"
            name="file-upload"
            id="file-upload"
            onChange={handleInputFileOnChange}
          />
        </div>

        <div>
          {files.map(({ name }) => (
            <img key={name} src={name} alt={name} />
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
