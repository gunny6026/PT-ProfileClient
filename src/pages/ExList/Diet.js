import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const Diet = () => {
    const [posts, setPosts] = useState([]);
	const [last, setLast] = useState('');
	const [page, setPage] = useState(0);

	useEffect(() => {
		fetch("http://10.100.102.27:8000/exBoard1/?page="+page, {
			method: "GET"
		}).then(res => res.json())
			.then(res => {
				console.log(res);
				setPosts(res.content);
				setLast(res.last);
			});
	}, [page]);

	const prev = () =>{
		setPage(page-1);
	}

	const next = () =>{
		setPage(page+1);
	}

	return (
		<div>
			{posts.map(post => 
                <Card key={post.id}>
			        <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        
                        
			        </Card.Body>
		        </Card>
            )}


			<br />
			<div className="d-flex justify-content-center">
				<Pagination>
					{page === 0 ? 
						<Pagination.Item onClick={prev} disabled>Prev</Pagination.Item> : 
						<Pagination.Item onClick={prev}>Prev</Pagination.Item>}
					{last === true ? 
						<Pagination.Item onClick={next} disabled>Next</Pagination.Item> : 
						<Pagination.Item onClick={next}>Next</Pagination.Item>}
				</Pagination>
			</div>
		</div>
	);
};

export default Diet;
