import * as React from 'react';

interface ListProps {
    strings: string[];
}

export class List extends React.Component {
    props: ListProps;

    render() {
        const strings = this.props.strings.map((s, i) => <div key={i}>{s}</div>)
        return <div>
            {strings}
        </div>;
    }
}