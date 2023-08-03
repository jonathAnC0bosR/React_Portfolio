export default function NavItem (props) {
    return(
        <li className="nav-item">
        <a
          href={props.page}
          onClick={() => props.handlePageChange(props.page)}
          className={props.currentPage === props.page ? 'nav-link active' : 'nav-link'}
        >
          {props.page}
        </a>
      </li>
    )
}