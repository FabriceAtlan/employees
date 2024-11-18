import './Card.css';

interface EmployeeI {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  }
}

interface PropEm {
	employe: EmployeeI;
}

function Card({employe}:PropEm) {
	return (
		<figure className="figure-container">
			<section>
				<h2>{`${employe.name.first} ${employe.name.last}`}</h2>
				<p>{employe.email}</p>
			</section>
			<figcaption>
				<img className='figure-img' src={employe.picture.medium} alt={`Faites connaissance avec ${employe.name.first}`}/>
			</figcaption>
		</figure>
	);
}

export default Card;
