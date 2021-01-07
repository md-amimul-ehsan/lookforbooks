import React from "react";

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <div >
                <section>
                    <form action="" onSubmit={props.handleSubmit}>
                        <div>
                            <input
                                placeholder="Search for Books" 
                                type="text" 
                                onChange={props.handleChange}

                            />
                        </div>
                    </form>
                    
                </section>
            </div>
        </div>
    );
};

export default SearchBar;