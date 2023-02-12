import "./App.css";
import ImagePizzaria from "./img/logo.jpeg";

function App() {
  return (
    <div className="App">
      <img className="image-logo" src={ImagePizzaria} alt="logo" />

      <div className="content">
        <div className="container-form">
          <p>
            <strong>Pesquisa de Satisfação do Cliente</strong>
          </p>
          <p>
            <strong>
              Muito obrigado pela sua participação na nossa pesquisa de
              satisfação.
            </strong>{" "}
          </p>
          <p>
            Para começar, por favor, nos forneça algumas informações que estão
            no seu recibo.
          </p>
          <form>
            <p>
              <span>Número da Loja</span>
              <span>
                <label>: </label>
                <input type="text" />
              </span>
            </p>

            <p>Data da compra:</p>
            <select>
              <option value=""> Dia</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>

            <select id="InputMonth" name="InputMonth" title="Mês">
              <option value="">Mês</option>
              <option value="01" aria-hidden="false">
                01
              </option>
              <option value="02" aria-hidden="false">
                02
              </option>
              <option value="03" aria-hidden="false">
                03
              </option>
              <option value="04" aria-hidden="false">
                04
              </option>
              <option value="05" aria-hidden="false">
                05
              </option>
              <option value="06" aria-hidden="false">
                06
              </option>
              <option value="07" aria-hidden="false">
                07
              </option>
              <option value="08" aria-hidden="false">
                08
              </option>
              <option value="09" aria-hidden="false">
                09
              </option>
              <option value="10" aria-hidden="false">
                10
              </option>
              <option value="11" aria-hidden="false">
                11
              </option>
              <option value="12" aria-hidden="false">
                12
              </option>
            </select>

            <select>
              <option>Ano</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>

            <p>
              <span>Hora:</span>
              <label></label>
              <select title="Hora">
                <option value="">Hora</option>
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
            </p>
          </form>
          <br />
          <br />
          <p className="text-conclusion">
            Após a conclusão da pesquisa, você receberá um código de validação
            que poderá ser utilizado para resgatar sua oferta em uma das nossas
            lojas.
          </p>
          <div className="container-btn">
            <button className="btn-Continue" type="submit" value="Continuar">
              Continuar
            </button>
          </div>
          <div className="container-english">
            <a href="Index.aspx?LanguageID=US" aria-hidden="false">
              English
            </a>
          </div>
          <div className="container-text">
            Essa empresa e seu processador, Service Management Group, LLC
            ("SMG"), gostariam de coletar os dados do seu computador e
            navegador, incluindo seu endereço IP e domínio, informações de
            cookies, e atributos de software e hardware. Usamos esses dados para
            facilitar a comunicação entre o seu dispositivo e nossos sistemas,
            para enviar pesquisas, para assegurar a integridade da pesquisa,
            para detectar e prevenir fraudes, para conduzir pesquisas de
            mercado, para administrar e melhorar nosso site e aplicativos, e
            para analisar a utilização dos serviços SMG, assim como para
            melhorá-los e aprimorá-los. A SMG processa os dados coletados nos
            Estados Unidos. No link abaixo, estão disponíveis mais informações
            sobre as práticas de privacidade da SMG. Ao clicar no botão
            "Continuar", você estará concordando com a utilização, pela SMG, de
            cookies e outras tecnologias de obtenção de informações.
          </div>
          <div className="footer">
            <ul>
              <li>
                <a
                  href="Projects/_globalconfigs/text/pdf/smgprivacypolicy/SMG_PP_pt-BR.pdf"
                  target="_blank"
                >
                  Política de Privacidade da SMG
                </a>
              </li>
              <li >
                <a
                  href="Projects/_globalconfigs/text/pdf/termsofservice/SMG_TOS_pt-BR.pdf"
                  target="_blank"
                >
                  Termos e Condições da SMG
                </a>
              </li>
              <li >
                © 2023{" "}
                <a href="https://www.smg.com" target="_blank" rel="noreferrer">
                  SMG
                </a>
                . Todos os direitos reservados.
              </li>
            </ul>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}

export default App;
