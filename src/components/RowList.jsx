import { Fragment } from 'react';

export default function RowList({ rowIds, renderRow }) {
    return(
        <>
            {
                rowIds.map((rowId, index) => 
                    <Fragment key={rowId}>
                        {renderRow(index)}
                    </Fragment>
                )
            }
        </>
    )
}