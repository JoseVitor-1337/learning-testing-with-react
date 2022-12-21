export const JobForm = () => {
  return (
    <>
      <h1>Formulário de aquisição de trabalho</h1>
      <h2>Preencha todos os campos</h2>

      <p title="Aviso importante">Preencha os campos com os dados corretos.</p>

      <img src="" alt="Avatar do usuários" />

      <form data-testid="job-form">
        <div>
          <label htmlFor="work">Trabalho</label>
          <input
            value="José Vitor"
            type="text"
            name="work"
            id="work"
            placeholder="Nome completo"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="experience">Experiência</label>
          <textarea
            value="Sou programador"
            name="experience"
            id="experience"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="country">Local do trabalho</label>
          <select defaultValue="" id="country">
            <option value="">Selecione um estado</option>
            <option value="PO">Portugal</option>
            <option value="BR">Brasil</option>
            <option value="VZ">Venezuela</option>
            <option value="US">Estados unidos</option>
            <option value="GB">Estado unidence</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            Nome
            <input type="checkbox" name="terms" id="terms" />
          </label>
        </div>

        <button disabled type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
