export default function DateBox({ date }) {
    const formatedDate = new Date(date).toDateString();
    return (
        <div>
            <p>{formatedDate}</p>
        </div>
    );
}