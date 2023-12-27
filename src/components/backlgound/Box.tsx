const Box = (prop:any) => {
    return (
      <div className="md:mt-14 md:mx-20">
          {prop.children}
      </div>
    )
  }
  
  export default Box