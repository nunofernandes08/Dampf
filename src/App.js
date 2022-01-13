import "./styles.css";

export default function App() {
  const qMax = 20;
  const pdetToQmax = 8;
  const pMuo = 2;
  const qPmin = 0;
  const pMin = 0;
  const pDet = 0;

  //m = (Qmax – QatPmin)/(PdetatQmax – Pmin)
  const m = (qMax - qPmin) / (pdetToQmax - pMin);
  //b = Qmax – m * PdetatQmax
  const b = qMax - m * pdetToQmax;
  //y = m * x + b
  //Q = m * Pdet + b
  const Q = m * pDet + b;
  //Equação C (Q = 20 – 0.2Pdet)
  const equationC = 20 - 0.2 * pDet;
  const rMxPlus = m + 0.2;
  const rCLess = 20 - b;
  const x = rCLess / rMxPlus;
  const y = m * x + b;

  return (
    <div>
      <div className="App">
        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Pontos da interseção
        </h2>

        <div>
          <h2 style={{ marginTop: 5 }}>
            qMax = Valor mais alto do <span className="SPAN">Qura</span>
          </h2>
          <h2>
            pdetToQmax = Valor do <span className="SPAN">pdet</span> quando
            atinge o valor do <span className="SPAN">qMax</span>
          </h2>
          <h2>
            pMuo = Menor valor de <span className="SPAN">pdet</span> obtido após
            iniciar o <span className="SPAN">“start voiding”</span>
          </h2>
          <h2>pMin = Valor minimo em que gráfico?</h2>
          <h2>
            qPmin = Valor do <span className="SPAN">Qura</span> (?) quando
            atinge o <span className="SPAN">pMin</span>?
          </h2>
          <h2>pDet = ??</h2>
        </div>

        <hr className="HrStyle2" />

        <h2 className="H2" style={{ marginBottom: 20, color: "green" }}>
          Valores dos pontos
        </h2>

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
            pMuo = <span className="SPAN">{pMuo}</span>
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

        <div class="App2">
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
        <div class="App2">
          <h2 className="H2">
            x = <span className="SPAN">{x}</span>{" "}
          </h2>
          <h2 className="H2">
            y = <span className="SPAN">{y}</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
