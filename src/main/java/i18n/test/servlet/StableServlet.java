package i18n.test.servlet;

import i18n.test.model.Donkey;
import i18n.test.model.Stable;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

/**
 * Servlet implementation class StableServlet
 */
public class StableServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StableServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Stable stable = new Stable();
		stable.name = "The Donkey Stable";
		stable.location = "Donkey City, MO";
		
		Donkey donkey1 = new Donkey();
		donkey1.name = "Boyko";
		donkey1.height = 173;
		donkey1.weight = 180.0;
		donkey1.temper = "Moody";
		
		Donkey donkey2 = new Donkey();
		donkey2.name = "Vlad";
		donkey2.height = 163;
		donkey2.weight = 190.0;
		donkey2.temper = "SuperNice";
		
		stable.donkeys.add(donkey1);
		stable.donkeys.add(donkey2);
		
		ObjectMapper mapper = new ObjectMapper();
		String stableJson = mapper.writeValueAsString(stable);
		
		response.setContentType("application/json; charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(stableJson);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
