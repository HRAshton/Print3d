import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, Div, PanelHeader, InfoRow, Select } from '@vkontakte/vkui';
import Tetrahedron from "../img/Tetrahedron.svg"
import Parallelepiped from "../img/Parallelepiped.svg"
import './Home.css';

const sizes = [
	["Длина стороны"],
	["Высота", "Длина стороны"],
	["Радиус"],
	["Высота", "Радиус основания"],
	["Длина стороны А", "Длина стороны B", "Длина стороны C", "Длина стороны D"],
	["Длина", "Ширина", "Высота"],
];

const Home = ({ id, selectedFigure, lenA, lenB, lenC, lenD, volume, cost, selectFigure, selectedPlastic, changeLen, changePlastic, plasticTypes }) => {


	return (
		<Panel id={id}>
			<PanelHeader>Калькулятор стоимости печати</PanelHeader>

			<Group>
				<Div>
					<InfoRow title={"Сумма"} style={{ textAlign: "center" }}>
						{cost} руб.
					</InfoRow>
				</Div>
			</Group>

			<Group title="Пластик">
				<Div id={"plastic"}>
					<Select onChange={(x) => changePlastic(x.target.value)} value={selectedPlastic}>
						{
							plasticTypes.map((x, index) => <option key={x.Name} value={index}>{x.Name} - {x.Cost} &#8381;/г</option>)
						}
					</Select>
				</Div>
			</Group>

			<Group title="Выберите фигуру">
				<Div id={"figs"}>
					<Button size="l" stratched={"true"} level={selectedFigure === 0 ? "secondary" : "tertiary"} onClick={() => selectFigure(0)}>
						<Div style={{ display: "flex", flexDirection: "column" }}>
							<img src={Tetrahedron} />
							Куб
						</Div>
					</Button>
					<Button size="l" stratched={"true"} level={selectedFigure === 1 ? "secondary" : "tertiary"} onClick={() => selectFigure(1)}>
						<Div style={{ display: "flex", flexDirection: "column" }}>
							<img src={Tetrahedron} />
							Пирамида
						</Div>
					</Button>
					<Button size="l" stratched={"true"} level={selectedFigure === 2 ? "secondary" : "tertiary"} onClick={() => selectFigure(2)}>
						<Div style={{ display: "flex", flexDirection: "column" }}>
							<img src={Tetrahedron} />
							Сфера
						</Div>
					</Button>
					<Button size="l" stratched={"true"} level={selectedFigure === 3 ? "secondary" : "tertiary"} onClick={() => selectFigure(3)}>
						<Div style={{ display: "flex", flexDirection: "column" }}>
							<img src={Tetrahedron} />
							Конус
						</Div>
					</Button>
					<Button size="l" stratched={"true"} level={selectedFigure === 4 ? "secondary" : "tertiary"} onClick={() => selectFigure(4)}>
						<Div style={{ display: "flex", flexDirection: "column" }}>
							<img src={Tetrahedron} />
							Тетраэдр
						</Div>
					</Button>
					<Button size="l" stratched={"true"} level={selectedFigure === 5 ? "secondary" : "tertiary"} onClick={() => selectFigure(5)}>
						<Div style={{ display: "flex", flexDirection: "column" }}>
							<img src={Parallelepiped} />
							Параллелеппипед
						</Div>
					</Button>
				</Div>
			</Group>

			<Group title={"Размеры"}>
				{
					!!sizes[selectedFigure][0] &&
					<Div style={{width: "100%", display: "inline-flex"}}>
						<label style={{maxWidth: "max-content"}}>{sizes[selectedFigure][0]}:</label>
						<input type={"number"} value={lenA} onChange={(x) =>
							changeLen(0, parseFloat(x.target.value.replace(",", ".")))}/>
					</Div>
				}
				{
					!!sizes[selectedFigure][1] &&
					<Div style={{width: "100%", display: "inline-flex"}}>
						<label style={{maxWidth: "max-content"}}>{sizes[selectedFigure][1]}:</label>
						<input type={"number"} value={lenB} onChange={(x) => changeLen(1, parseFloat(x.target.value.replace(",", ".")))}/>
					</Div>
				}
				{
					!!sizes[selectedFigure][2] &&
					<Div style={{width: "100%", display: "inline-flex"}}>
						<label style={{maxWidth: "max-content"}}>{sizes[selectedFigure][2]}:</label>
						<input type={"number"} value={lenC} onChange={(x) => changeLen(2, parseFloat(x.target.value.replace(",", ".")))}/>
					</Div>
				}
				{
					!!sizes[selectedFigure][3] &&
						<Div style={{width: "100%", display: "inline-flex"}}>
							<label style={{maxWidth: "max-content"}}>{sizes[selectedFigure][3]}:</label>
							<input type={"number"} value={lenD} onChange={(x) => changeLen(3, parseFloat(x.target.value.replace(",", ".")))} />
						</Div>
				}
			</Group>
		</Panel>
	);
};

Home.propTypes = {
	selectedFigure: PropTypes.any,
	selectedPlastic: PropTypes.any,

	lenA: PropTypes.number,
	lenB: PropTypes.number,
	lenC: PropTypes.number,
	lenD: PropTypes.number,
	volume: PropTypes.number,

	selectFigure: PropTypes.func,
	changeLen: PropTypes.func,
	changePlastic: PropTypes.func,

	plasticTypes: PropTypes.array,
};

export default Home;
