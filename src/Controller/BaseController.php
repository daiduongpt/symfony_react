<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{
    /**
     * @Route("/", name="index_home")
     *
     */
    public function index()
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/about-us", name="about_us")
     *
     */
    public function aboutUs()
    {
        return $this->render('about-us.html.twig');
    }
}