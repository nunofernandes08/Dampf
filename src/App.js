import "./styles.css";

export default function App() {
  const qMax = 9;
  const pdetToQmax = 20;
  const qPmin = 0;
  const pMin = 0;
  const pDet = 0;

  //y = m * x + b
  //m = (Qmax – QatPmin)/(PdetatQmax – Pmin)
  const m = (qMax - qPmin) / (pdetToQmax - pMin);
  //b = Qmax – m * PdetatQmax
  const b = qMax - m * pdetToQmax;
  //Q = m * Pdet + b
  const Q = m * pDet + b;
  //Equação C (Q = 20 – 0.2Pdet)
  const equationC = 20 - 0.2 * pDet;
  const rMxPlus = m + 0.2;
  const rCLess = 20 - b;
  //Para saber o ponto X eu
  //coloquei o valores com as incognitas de um lado
  //e os valores sem incognitas do outro. Depois fiz os calculos necessarios
  //e isolei o ponto x e fiz a divisão dos valores que sobraram.
  const x = rCLess / rMxPlus;
  //Para saber o ponto Y eu
  //eu escolhi uma equeção e subtituí o valor X e fiz os calculos.
  const y = m * x + b;

  return (
    <div className="Back">
      <div className="App">
        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Tipos e seus valores
        </h2>

        <div>
          <h2 style={{ marginTop: 5 }}>
            qMax = Valor mais alto do <span className="SPAN">Qura</span>
          </h2>
          <h2>
            pdetToQmax = Valor do <span className="SPAN">Pdet</span> quando
            atinge o valor do <span className="SPAN">qMax</span>
            Voiding phase
          </h2>
          <h2>
            pMin = Valor minimo <span className="SPAN">Pdet</span> na voinding
            phase
          </h2>
          <h2>
            qPmin = Valor do <span className="SPAN">Qura</span> quando atinge o{" "}
            <span className="SPAN">pMin</span>
          </h2>
          <h2>pDet = x</h2>
        </div>

        <hr className="HrStyle2" />

        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Valores dos pontos (todos pontos 0 é porque não sei onde ir buscar)
        </h2>

        <div>
          <div className="App2">
            <h2 className="H2">
              qMax = <span className="SPAN">{qMax}</span>
            </h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              pdetToQmax = <span className="SPAN">{pdetToQmax}</span>
            </h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              pMin = <span className="SPAN">{pMin}</span>
            </h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              qPmin = <span className="SPAN">{qPmin}</span>
            </h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              pDet = <span className="SPAN">{pDet}</span>
            </h2>
          </div>

          <img
            src={require("./qura.png")}
            alt="qura"
            style={{ width: 700, height: 220 }}
          />
          <img
            src={require("./pdet.png")}
            alt="qura"
            style={{ width: 700, height: 220 }}
          />
        </div>

        <hr className="HrStyle2" />

        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Resolução das equações
        </h2>

        <div>
          <div className="App2">
            <h2 className="H2">m = (qMax - qPmin) / (pdetToQmax - pMin)</h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              m = ({qMax} - {qPmin}) / ({pdetToQmax} - {pMin})
            </h2>
          </div>
          <h2 style={{ margin: 0, marginLeft: 5, marginBottom: 20 }}>
            m = <span className="SPAN">{m}</span>
          </h2>

          <div className="App2">
            <h2 className="H2">b = qMax - (m * pdetToQmax)</h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              b = {qMax} - ({m} * {pdetToQmax})
            </h2>
          </div>
          <h2 style={{ margin: 0, marginLeft: 5, marginBottom: 20 }}>
            b = <span className="SPAN">{b}</span>
          </h2>

          <div className="App2">
            <h2 className="H2">Q = m * pDet + b</h2>
            <hr className="HrStyle" />
            <h2 className="H2">
              Q = ({m} * {pDet}) + {b}
            </h2>
          </div>
          <h2 style={{ margin: 0, marginLeft: 5, marginBottom: 20 }}>
            Q = <span className="SPAN">{Q}</span>
          </h2>

          <div className="App2">
            <h2 className="H2">Equação C = 20 – (0.2 * Pdet)</h2>
            <hr className="HrStyle" />
            <h2 className="H2">Equação C = 20 – (0.2 * {pDet})</h2>
          </div>
          <h2 style={{ margin: 0, marginLeft: 5, marginBottom: 20 }}>
            Equação C = <span className="SPAN">{equationC}</span>
          </h2>
        </div>

        <hr className="HrStyle2" />

        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Interseção das retas
        </h2>

        <div className="App2">
          <div>
            <div className="App2">
              <h2 className="H2">
                {m}x + {b} =
              </h2>

              <h2 className="H2">20 – 0.2x</h2>
            </div>
            <div className="App2">
              <h2 className="H2">{m}x + 0.2x =</h2>

              <h2 className="H2">20 – {b}</h2>
            </div>
            <div className="App2">
              <h2 className="H2">{rMxPlus}x =</h2>

              <h2 className="H2">{rCLess}</h2>
            </div>
            <div className="App2">
              <h2 className="H2">x =</h2>

              <h2 className="H2">
                {rCLess}/{rMxPlus}
              </h2>
            </div>

            <h2 className="H2">
              x = <span className="SPAN">{x}</span>
            </h2>
          </div>
          <hr className="HrStyle3" />
          <div>
            <div className="App2">
              <h2 className="H2">
                y = {m}x + {b}
              </h2>
            </div>
            <div className="App2">
              <h2 className="H2">
                {m} * {x} + {b}
              </h2>
            </div>

            <h2 className="H2">
              y = <span className="SPAN">{y}</span>
            </h2>
          </div>
        </div>

        <hr className="HrStyle2" />

        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Pontos da interseção
        </h2>
        <div className="App2">
          <h2 className="H2">
            x = <span className="SPAN">{x}</span>
          </h2>
          <h2 className="H2">
            y = <span className="SPAN">{y}</span>
          </h2>
        </div>

        <hr className="HrStyle2" />

        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Obeservações
        </h2>
        <div>
          <h2 className="H2">
            Para saber o ponto X eu coloquei o valores com as incognitas de um
            lado e os valores sem incognitas do outro. Depois fiz os calculos
            necessarios e isolei o ponto x e fiz a divisão dos valores que
            sobraram.
          </h2>

          <h2>
            Para saber o ponto Y eu eu escolhi uma equeção e subtituí o valor X
            e fiz os calculos.
          </h2>
        </div>
      </div>
    </div>
  );
}
